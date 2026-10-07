<?php

$pdo = new PDO(
    'mysql:host=db;port=3306;dbname=db;charset=utf8mb4',
    'db',
    'db',
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
);

$stmt = $pdo->prepare(
    "SELECT data FROM config WHERE collection = '' AND name = 'core.extension'"
);
$stmt->execute();

$row = $stmt->fetch();

if (!$row) {
    throw new RuntimeException('Could not find core.extension in the database.');
}

$config = unserialize($row['data']);

if (!is_array($config)) {
    throw new RuntimeException('core.extension data could not be unserialized.');
}

if (isset($config['module']['queue_ui'])) {
    echo "queue_ui is already present.\n";
    exit(0);
}

if (!isset($config['module']['media_library_importer'])) {
    throw new RuntimeException(
        'Unexpected: media_library_importer is not enabled.'
    );
}

$config['module']['queue_ui'] = 0;
ksort($config['module']);

$new_data = serialize($config);

$update = $pdo->prepare(
    "UPDATE config
     SET data = :data
     WHERE collection = '' AND name = 'core.extension'"
);

$update->execute([':data' => $new_data]);

echo "SUCCESS: queue_ui added to active core.extension.\n";
