package com.gallery.smart.SmartGallery.Model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Getter
@Setter
@Entity(name = "TYPE")
public class Type {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String libelleType;

   @ManyToOne
   public Style style;
}