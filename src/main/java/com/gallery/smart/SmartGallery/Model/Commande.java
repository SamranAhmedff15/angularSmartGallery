package com.gallery.smart.SmartGallery.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;

@Entity(name = "COMMANDE")
@Getter
@Setter
public class Commande {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private Date dateCommande;

   private float totalCommande;

   private String descriptionCommande;

   private int remarque;

   @ManyToOne
   private Client client;
}