package com.example.oblig3;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    private final List<Billett> alleBiletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billett kjopBillett) {
        alleBiletter.add(kjopBillett);
    }

    @GetMapping("/getAll")
    public List<Billett> getAll() {
        return alleBiletter;
    }

    @GetMapping("/slettAlt")
    public void slettAlt() {
        alleBiletter.clear();

    }
    }
