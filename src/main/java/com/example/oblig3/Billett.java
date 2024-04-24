package com.example.oblig3;

public class Billett {
    private String film;
    private Integer antall;
    private String forNavn;
    private String etterNavn;
    private String telefonNr;
    private String epost;

    public Billett(String film, Integer antall, String forNavn, String etterNavn, String telefonNr, String epost) {
        this.film = film;
        this.antall = antall;
        this.forNavn = forNavn;
        this.etterNavn = etterNavn;
        this.telefonNr = telefonNr;
        this.epost = epost;
    }

    public Billett() {
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public Integer getAntall() {
        return antall;
    }

    public void setAntall(Integer antall) {
        this.antall = antall;
    }

    public String getForNavn() {
        return forNavn;
    }

    public void setForNavn(String forNavn) {
        this.forNavn = forNavn;
    }

    public String getEtterNavn() {
        return etterNavn;
    }

    public void setEtterNavn(String etterNavn) {
        this.etterNavn = etterNavn;
    }

    public String getTelefonNr() {
        return telefonNr;
    }

    public void setTelefonNr(String telefonNr) {
        this.telefonNr = telefonNr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}


