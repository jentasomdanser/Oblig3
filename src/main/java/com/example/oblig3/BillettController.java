package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    @Autowired
    private BillettReposetory rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett kjopBillett) {
        rep.lagreBillett(kjopBillett);
    }

    @GetMapping("/getAll")
    public List<Billett> getAll() {
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettAlt")
    public void slettAlt() {
        rep.slettAlleBilletter();

    }
}
