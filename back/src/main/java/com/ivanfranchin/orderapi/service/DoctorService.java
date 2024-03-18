package com.ivanfranchin.orderapi.service;

import com.ivanfranchin.orderapi.model.Doctor;

import javax.print.Doc;
import java.util.List;

public interface DoctorService {

    List<Doctor> getAllDoctors();

    Doctor saveDoctor(Doctor doctor);

}
