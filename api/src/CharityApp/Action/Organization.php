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

        if (empty($this->args['slug'])) {
            $results = $orgRepo->findAll();
        } else {
            $slug = $this->args['slug'];
            $results = $orgRepo->findOneByName($slug);
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
        $postData = json_decode($request->getBody());
        $organization = new \CharityApp\Entity\Organization(
            $postData->name,
            isset($postData->slug) ? $postData->slug : preg_replace('/[^\w]/', '', $postData->name),
            $postData->lat,
            $postData->lon,
            '',
            $postData->desc
        );

        /** @var EntityManager $em */
        $em = $GLOBALS['app']->getContainer()->get('entity_manager');
        $em->persist($organization);
        $em->flush();

        $resp = (object)[
            'status' => 'OK',
            $organization
        ];

        return $this->json($resp);
    }
}
