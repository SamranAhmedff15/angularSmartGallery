package com.gallery.smart.SmartGallery.Repository;

import com.gallery.smart.SmartGallery.Model.Artiste;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArtisteRepository extends JpaRepository<Artiste, Long> {
    //Optional<Artiste> findByIdArtiste(Long idArtiste);

}