<?php
// Routes

$app->get('/', 'CharityApp\Action\Home');
$app->get('/organization', 'CharityApp\Action\Organization');
$app->get('/user', 'CharityApp\Action\User');
$app->get('/cause', 'CharityApp\Action\Cause');
