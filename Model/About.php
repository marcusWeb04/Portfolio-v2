<?php

class About{
    // attribut
    private string $statut;
    private string $message;

    //constructeur
    public function __construct(string $statut, string $message)
    {
        $this->statut = $statut;
        $this->message = $message;
    }

    //getter
    public function getStatut(): string 
    {
        return $this->statut;
    }

    public function getMessage(): string 
    {
        return $this->message;
    }

    //setter
    public function setStatut(string $statut): void 
    {
        $this->statut = $statut;
    }

    public function setMessage(string $message): void 
    {
        $this->message = $message;
    }
}
