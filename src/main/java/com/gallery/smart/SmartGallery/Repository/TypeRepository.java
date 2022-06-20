package com.gallery.smart.SmartGallery.Repository;

import com.gallery.smart.SmartGallery.Model.Style;
import com.gallery.smart.SmartGallery.Model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TypeRepository extends JpaRepository<Type, Long> {
    Optional<Type> findByIdAllIgnoreCase(Long id);
    Optional<Type> findById(Long id);

    @Query("select t from TYPE t where t.libelleType = ?1")
    Optional<Type> findByLibelleType(String libelleType);

    Optional<Type> findByStyle_Id(Long id);


}
