<?php

namespace CharityApp;

use Slim\Http\Response;

class Action
{
    public function __invoke($request, $response, $args)
    {
        $this->request = $request;
        $this->response = $response;
        $this->args = $args;

        return $this->dispatch($request, $response, $args);
    }

    protected function dispatch($request, $response, $args)
    {
        $this->request = $request;
        $this->response = $response;
        $this->args = $args;

        $method = strtolower($request->getMethod());

        if (!method_exists($this, $method)) {
            return $response->write("Not implemented")->withStatus(501);
        } else {
            $r = $this->$method($request, $response, $args);
            if (!is_object($r) || get_class($r) != 'Slim\Http\Response') {
                return $response->write($r);
            }
            return $r;
        }
    }
}
