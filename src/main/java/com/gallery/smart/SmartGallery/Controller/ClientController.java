package com.gallery.smart.SmartGallery.Controller;

import com.gallery.smart.SmartGallery.Model.Artiste;
import com.gallery.smart.SmartGallery.Model.Client;
import com.gallery.smart.SmartGallery.Repository.ArtisteRepository;
import com.gallery.smart.SmartGallery.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/client")
public class ClientController {
    @Autowired
    private ClientRepository clientrepository;

    @Autowired
    private ArtisteRepository artisteRepository;

    @CrossOrigin
    @PostMapping(consumes = {"application/json"})
    public Client saveUser(@Validated @RequestBody Client client) throws Exception {
        if(clientrepository.countByMailClientIs(client.getMailClient()) == 0) {
            return saveOrupdate(client);
        }
        throw new Exception();
    }

    @CrossOrigin
    @PostMapping(consumes = {"application/json"}, path = "/update")
    public Client updateUser(@Validated @RequestBody Client client) {
        System.out.println("client = " + client.getTypeClient().equals("artiste"));
        return saveOrupdate(client);
    }

    @CrossOrigin
    @PostMapping(consumes = {"application/json"}, path = "/login")
    public Client login(@Validated @RequestBody Client client) throws Exception {
        Client returnClient = clientrepository.findByMailClientLikeAndPassClientLike(client.getMailClient(), client.getPassClient());
        if(returnClient == null) {
            throw new Exception();
        }
        return returnClient;
    }

    private Client saveOrupdate(Client client) {
        System.out.println(" Method called" );
        if(client.getTypeClient().equals("artiste")) {
            System.out.println(" ARTISTE" );
            Artiste artiste = new Artiste();
            artiste.setMailArtiste(client.getMailClient());
            artiste.setDateNaissance(client.getDateNaissanceClient());
            artiste.setNomArtiste(client.getNomClient());
            artiste.setPrenomArtiste(client.getPrenomClient());
            artisteRepository.save(artiste);
        }
        return clientrepository.save(client);
    }
}
