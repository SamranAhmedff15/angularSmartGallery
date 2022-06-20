package com.gallery.smart.SmartGallery.Repository;

import com.gallery.smart.SmartGallery.Model.Commande;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandeRepository extends JpaRepository<Commande, Long> {
}