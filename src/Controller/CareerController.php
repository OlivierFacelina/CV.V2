<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(name: 'career_')]
class CareerController extends AbstractController
{
    #[Route('/career', name: 'index')]
    public function index(): Response
    {
        return $this->render('career/index.html.twig', [
            'controller_name' => 'CareerController',
        ]);
    }
}
