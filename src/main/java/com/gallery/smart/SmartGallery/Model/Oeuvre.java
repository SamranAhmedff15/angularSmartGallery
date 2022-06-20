package com.gallery.smart.SmartGallery.Model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.*;


@Getter
@Setter
@Entity(name = "OEUVRE")
public class Oeuvre {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String libelleOeuvre;

   private float prixOeuvre;

   private int qteStockOeuvre;

   private String imgOeuvre;

   private String descriptionOeuvre;

   private Date dateRealisation;

   private int tautTva;

   private int tautRemise;

   @ManyToOne
   @OnDelete(action = OnDeleteAction.CASCADE)
   private Artiste artiste;

   @ManyToOne
   private Type type;
}