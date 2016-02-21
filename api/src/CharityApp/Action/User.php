<?php
namespace CharityApp\Action;

class User extends \CharityApp\Action
{
    public function get()
    {
        $results = [];
        $results[] = (object)[
            'id' => 1,
            'username' => 'userlogin',
            'first_name' => 'John',
            'last_name' => 'Doe',
        ];
        $resp = (object)[
            'status' => 'OK',
            'results' => $results,
        ];
        return $this->json($resp);
    }
}
