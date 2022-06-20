package com.gallery.smart.SmartGallery.Repository;

import com.gallery.smart.SmartGallery.Model.Oeuvre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OeuvreRepository extends JpaRepository<Oeuvre, Long> {
    List<Oeuvre> findByArtiste_NomArtisteLikeIgnoreCase(String nomArtiste);

    void deleteById(Long id);
}