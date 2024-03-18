package com.ivanfranchin.orderapi.rest;

import com.ivanfranchin.orderapi.model.Doctor;
import com.ivanfranchin.orderapi.model.Order;
import com.ivanfranchin.orderapi.repository.DoctorRepository;
import com.ivanfranchin.orderapi.repository.OrderRepository;
import com.ivanfranchin.orderapi.service.DoctorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/doctor")
@RestController
public class DoctorController {

    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }


    @GetMapping
    public List<Doctor> getDoctor() {
        return doctorService.getAllDoctors();
    }
}