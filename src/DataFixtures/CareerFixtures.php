<?php

namespace App\DataFixtures;

use App\Entity\Career;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CareerFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create();

        for ($i=0; $i<20; $i++){
            $career = new Career();
            $career->setSchool($faker->company());
            $career->setLocation($faker->city());
            $career->setFormation($faker->jobTitle());
            $career->setStartedAt($faker->year('-10 years'));
            $career->setEndAt($faker->year('-10 years'));
            $career->setDegree($faker->boolean());
            $manager->persist($career);
        }
        $manager->flush();
    }
}
