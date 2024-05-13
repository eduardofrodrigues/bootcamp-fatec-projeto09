package com.abutua.sellers.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.sellers.models.Seller;
import com.abutua.sellers.services.SellerService;

@RestController
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @PostMapping("/sellers")
    public ResponseEntity<Seller> postMethodName(@RequestBody Seller seller) {
        Seller sellerCreated = sellerService.create(seller);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(sellerCreated.getId())
                .toUri();

        return ResponseEntity.created(location).body(sellerCreated);
    }
}
