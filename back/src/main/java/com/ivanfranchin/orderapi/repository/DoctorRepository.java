package com.ivanfranchin.orderapi.repository;

import com.ivanfranchin.orderapi.model.Doctor;
import com.ivanfranchin.orderapi.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.List;


@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {


}
