package com.abutua.sellers.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.sellers.models.Seller;
import com.abutua.sellers.services.SellerService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin
@RequestMapping("sellers")
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @PostMapping
    public ResponseEntity<Seller> createSeller(@RequestBody Seller seller) {
        Seller sellerCreated = sellerService.create(seller);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(sellerCreated.getId())
                .toUri();

        return ResponseEntity.created(location).body(sellerCreated);
    }

    @GetMapping
    public ResponseEntity<List<Seller>> listAllSellers() {
        return ResponseEntity.ok(sellerService.listAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Seller> listOne(@PathVariable int id) {
        Seller seller = sellerService.listOne(id);
        return ResponseEntity.ok(seller);
    }

    @PutMapping("{id}")
    public ResponseEntity<Seller> updateOne(@PathVariable int id, @RequestBody Seller sellerToUpdate) {
        Seller sellerUpdated = sellerService.updateOne(id, sellerToUpdate);
        return ResponseEntity.ok(sellerUpdated);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteOne(@PathVariable int id) {
        sellerService.deleteOne(id);
        return ResponseEntity.ok().build();
    }
}
