package hospitalmanagement.hospitalmanagement.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hospitalmanagement.hospitalmanagement.entity.Doctor;

@Repository
public interface DoctorData extends JpaRepository<Doctor, Integer> {
    
}
