<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LayoutController extends AbstractController
{
    public function header(Request $request)
    {
        return $this->render('header.html.twig');
    }

    public function footer(Request $request)
    {
        return $this->render('footer.html.twig');
    }
}
