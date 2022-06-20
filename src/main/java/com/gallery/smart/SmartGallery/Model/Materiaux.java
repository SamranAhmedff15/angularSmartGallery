package com.gallery.smart.SmartGallery.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "MATERIAUX")
@Getter
@Setter
public class Materiaux {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String libelleMateriaux;

   @ManyToOne
   public Type type;

}