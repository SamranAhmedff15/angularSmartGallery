package com.gallery.smart.SmartGallery.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;

@Entity(name = "ARTISTE")
@Getter
@Setter
public class Artiste {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long idArtiste;

   private String nomArtiste;

   private String prenomArtiste;

   private String mailArtiste;

   private String imgArtiste;

   private String dateNaissance;

   private String biographieArtiste;

}