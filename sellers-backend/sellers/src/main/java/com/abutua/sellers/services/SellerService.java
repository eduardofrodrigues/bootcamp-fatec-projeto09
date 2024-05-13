package com.abutua.sellers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abutua.sellers.models.Seller;
import com.abutua.sellers.repositories.SellerRepository;

@Service
public class SellerService {
    @Autowired
    private SellerRepository sellerRepository;

    public Seller create(Seller seller) {
        return sellerRepository.save(seller);
    }
}
