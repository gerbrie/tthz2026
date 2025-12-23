<?php

$settings['file_private_path'] = $app_root . '/../private';;
$databases['default']['default'] = array (
  'database' => 'tthz_betthz10',
  'username' => 'tthz_betthz10',
  'password' => 'Zz9gpzli1',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'driver' => 'mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);
$settings['config_sync_directory'] = 'sites/default/files/config_Ig9DcTw2UyOR9UJScU7VdwEEWr0DGvjDz9LX2my1OCXuvzdQYtY2qU2KEQt93QBBi7hxqnqsew/sync';
if (isset($GLOBALS['request']) and
        '/web/index.php' === $GLOBALS['request']->server->get('SCRIPT_NAME')) {
$GLOBALS['request']->server->set('SCRIPT_NAME', '/index.php');
}
