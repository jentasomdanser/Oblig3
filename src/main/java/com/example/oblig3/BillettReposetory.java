package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettReposetory {
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett kjopBillett) {
        String sql = "INSERT INTO Billett (film, antall, forNavn, etterNavn, telefonNr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, kjopBillett.getFilm(), kjopBillett.getAntall(), kjopBillett.getForNavn(), kjopBillett.getEtterNavn(),
                kjopBillett.getTelefonNr(), kjopBillett.getEpost());
    }
    public List<Billett> hentAlleBilletter(){
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter =db.query(sql,new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }
    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
