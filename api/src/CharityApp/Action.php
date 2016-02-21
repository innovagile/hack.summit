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

        return $this->dispatch();
    }

    protected function dispatch()
    {
        $method = strtolower($this->request->getMethod());

        if (!method_exists($this, $method)) {
            return $this->response->write('Not implemented')->withStatus(501);
        } else {
            $r = $this->$method();
            if (!is_object($r) || get_class($r) != 'Slim\Http\Response') {
                return $this->response->write($r);
            }
            return $r;
        }
    }
    protected function json($resp)
    {
        return $this->response->write(json_encode($resp))->withHeader('Content-Type', 'application/json');
    }
}
