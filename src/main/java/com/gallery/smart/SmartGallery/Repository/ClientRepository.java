package com.gallery.smart.SmartGallery.Repository;

import com.gallery.smart.SmartGallery.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Long> {
    long countByMailClientIs(@NonNull String mailClient);

    Client findByMailClientLikeAndPassClientLike(@NonNull String mailClient, @NonNull String passClient);



}