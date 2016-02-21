<?php
namespace CharityApp\Action;

class User extends \CharityApp\Action
{
    public function get()
    {
        /** @var EntityManager $em */
        $em = $GLOBALS['app']->getContainer()->get('entity_manager');
        $userRepo = $em->getRepository(\CharityApp\Entity\User::class);

        $results = [];
        if (empty($this->args['username'])) {
            $results = $userRepo->findAll();
        } else {
            $username = $this->args['username'];
            $results = $userRepo->findByUsername($username);
        }
        $resp = (object)[
            'status' => 'OK',
            'results' => $results,
        ];
        return $this->json($resp);
    }
}
