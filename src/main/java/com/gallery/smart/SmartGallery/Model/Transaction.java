package com.gallery.smart.SmartGallery.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "TRANSACTION")
@Getter
@Setter
public class Transaction {
    @EmbeddedId
    CommandeOeuvreKey id;

    @ManyToOne
    @MapsId("commandeId")
    @JoinColumn(name = "commande_id")
    Commande commande;

    @ManyToOne
    @MapsId("oeuvreId")
    @JoinColumn(name = "oeuvre_id")
    Oeuvre oeuvre;

    private float prix;
}
