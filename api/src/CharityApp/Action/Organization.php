<?php
namespace CharityApp\Action;

use Doctrine\ORM\EntityManager;

class Organization extends \CharityApp\Action
{
    public function get()
    {
        /** @var EntityManager $em */
        $em = $GLOBALS['app']->getContainer()->get('entity_manager');
        $orgRepo = $em->getRepository(\CharityApp\Entity\Organization::class);

        $results = [];
        if (empty($this->args['slug'])) {
            $results = $orgRepo->findAll();
        } else {
            $slug = $this->args['slug'];
            $results = $orgRepo->findByName($slug);
        }
        $resp = (object)[
            'status' => 'OK',
            'results' => $results,
        ];

        return $this->json($resp);
    }

    public function post()
    {
        $request = $this->request;

        $resp = (object)[
            'status' => 'OK',
        ];

        return $this->json($resp);
    }
}
