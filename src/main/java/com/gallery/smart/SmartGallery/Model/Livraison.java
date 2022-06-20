package com.gallery.smart.SmartGallery.Model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.*;

@Entity(name = "LIVRAISON")
@Getter
@Setter
public class Livraison {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private Date dateLivraison;

   private String descriptionDeLivraison;

   @ManyToOne
   public Commande commande;

}