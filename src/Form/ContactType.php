<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstname', TextType::class, [
                'attr' => [
                    'class' => 'form-control firstname',
                    'placeholder' => 'John'
                ],
                'label' => 'Prénom :',
                'label_attr' => ['class' => 'form-label'],
                'required' => true,
            ])
            ->add('lastname', TextType::class, [
                'attr' => [
                    'class' => 'form-control lastname',
                    'placeholder' => 'DOE'
                ],
                'label' => 'Nom :',
                'label_attr' => ['class' => 'form-label'],
                'required' => true,
            ])
            ->add('subject', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Ton objet...'
                ],
                'label' => 'Objet :',
                'label_attr' => ['class' => 'form-label'],
                'required' => true,
            ])
            ->add('email', EmailType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Email'
                ],
                'label' => 'Email :',
                'label_attr' => ['class' => 'form-label'],
                'required' => true,
            ])
            ->add('message', TextareaType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Message...'
                ],
                'label' => 'Message :',
                'label_attr' => ['class' => 'form-label'],
                'required' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
