<?php
$ymlLoader = new \Symfony\Component\Yaml\Yaml();
$parameters = $ymlLoader->parse(file_get_contents('../config/parameters.yml'));

return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => __DIR__ . '/../logs/app.log',
        ],
    ],
    'parameters' => $parameters['parameters']
];
