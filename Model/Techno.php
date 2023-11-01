<?php

class Techno{
    // attribut
    private int $id;
    private string $name;
    private string $description;
    private IMAGE $image;

    // constructeur
    public function __construct(int $id, string $name, string $description, Image $image) 
    {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->image = $image;
    }

    // getter
    public function getId(): int 
    {
        return $this->id;
    }

    public function getName(): string 
    {
        return $this->name;
    }

    public function getDescription(): string 
    {
        return $this->description;
    }

    //setter
    public function getImage(): Image 
    {
        return $this->image;
    }

    public function setId(int $id): void {
        $this->id = $id;
    }

    public function setName(string $name): void {
        $this->name = $name;
    }

    public function setDescription(string $description): void {
        $this->description = $description;
    }

    public function setImage(Image $image): void {
        $this->image = $image;
    }
}