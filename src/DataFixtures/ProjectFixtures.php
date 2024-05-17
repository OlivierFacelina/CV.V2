<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create();

        for ($i=0; $i<20; $i++){
            $project = new Project();
            $project->setName($faker->name());
            $project->setLanguage($faker->languageCode());
            $project->setDescription($faker->realText());
            $project->setLink($faker->url());
            $project->setImage($faker->image());
            $manager->persist($project);
        }
        $manager->flush();
    }
}
