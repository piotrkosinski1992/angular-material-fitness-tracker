package com.fitnesstracker.backend.app.gateway;

import com.fitnesstracker.backend.app.domain.User;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, UUID> {

}
