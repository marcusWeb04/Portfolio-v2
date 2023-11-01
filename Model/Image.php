<?php

class Image{
    private int $id;
    private string $name;
    private string $link;

    public function __construct(int $id, string $name, string $link) 
    {
        $this->id = $id;
        $this->name = $name;
        $this->link = $link;
    }

    public function getId(): int 
    {
        return $this->id;
    }

    public function getName(): string 
    {
        return $this->name;
    }

    public function getLink(): string 
    {
        return $this->link;
    }

    public function setId(int $id): void 
    {
        $this->id = $id;
    }

    public function setName(string $name): void 
    {
        $this->name = $name;
    }

    public function setLink(string $link): void 
    {
        $this->link = $link;
    }
}