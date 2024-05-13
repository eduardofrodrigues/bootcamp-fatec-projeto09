package com.abutua.sellers.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.abutua.sellers.models.Seller;
import com.abutua.sellers.repositories.SellerRepository;

@Service
public class SellerService {
    @Autowired
    private SellerRepository sellerRepository;

    public Seller create(Seller seller) {
        return sellerRepository.save(seller);
    }

    public List<Seller> listAll() {
        return sellerRepository.findAll();
    }

    public Seller listOne(int id) {
        Seller seller = sellerRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Seller not found"));

        return seller;
    }

    public Seller updateOne(int id, Seller sellerToUpdate) {
        Seller seller = listOne(id);

        seller.setBonus(sellerToUpdate.getBonus());
        seller.setGender(sellerToUpdate.getGender());
        seller.setName(sellerToUpdate.getName());
        seller.setSalary(sellerToUpdate.getSalary());

        return sellerRepository.save(seller);
    }

    public void deleteOne(int id) {
        Seller seller = listOne(id);
        sellerRepository.delete(seller);
    }
}
