<?php

namespace App\DataFixtures;

use App\Entity\Skill;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SkillFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        $faker = \Faker\Factory::create();

        for ($i=0; $i<20; $i++){
            $skill = new Skill();
            $skill->setLabel($faker->name());
            $skill->setLogo($faker->url());
            $manager->persist($skill);
        }
        $manager->flush();

    }
}
