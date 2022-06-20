package com.gallery.smart.SmartGallery.Repository;

import com.gallery.smart.SmartGallery.Model.CommandeOeuvreKey;
import com.gallery.smart.SmartGallery.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, CommandeOeuvreKey> {
}