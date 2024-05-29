<?php

namespace App\DataFixtures;

use App\Entity\Contact;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ContactFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = \Faker\Factory::create();

        for ($i=0; $i<20; $i++){
            $contact = new Contact();
            $contact->setFirstname($faker->firstName());
            $contact->setLastname($faker->lastName());
            $contact->setEmail($faker->email());
            $contact->setMessage($faker->text());
            $contact->setSubject($faker->title());
            $manager->persist($contact);
        }
        $manager->flush();
    }
}
