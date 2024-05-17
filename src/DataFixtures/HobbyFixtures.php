<?php

namespace App\DataFixtures;

use App\Entity\Hobby;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class HobbyFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create();

        for ($i=0; $i<20; $i++){
            $hobby = new Hobby();
            $hobby->setName($faker->name());
            $hobby->setLogo($faker->url());
            $hobby->setDescription($faker->realText());
            $manager->persist($hobby);
        }
        $manager->flush();
    }
}
