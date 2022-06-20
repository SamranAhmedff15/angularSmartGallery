package com.gallery.smart.SmartGallery.Controller;

import com.gallery.smart.SmartGallery.Model.Artiste;
import com.gallery.smart.SmartGallery.Repository.ArtisteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/artiste")
public class ArtisteController {

    @Autowired
    private ArtisteRepository artisteRepository;

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Artiste> saveArtiste(@PathVariable long id) {
        return artisteRepository.findById(id);
    }
}
