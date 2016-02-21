<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], Monolog\Logger::DEBUG));
    return $logger;
};

$container['entity_manager'] = function($c) {
    $parameters = $c->get('settings')['parametrs'];
    $paths = array(__DIR__ . "/resources/doctrine/");
    $isDevMode = true;
    $config = \Doctrine\ORM\Tools\Setup::createYAMLMetadataConfiguration($paths, $isDevMode);
    return EntityManager::create($dbParams, $config);
};
