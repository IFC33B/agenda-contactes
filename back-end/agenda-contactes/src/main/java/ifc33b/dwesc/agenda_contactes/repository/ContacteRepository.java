package ifc33b.dwesc.agenda_contactes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ifc33b.dwesc.agenda_contactes.model.Contacte;

@Repository
public interface ContacteRepository extends JpaRepository<Contacte, Long> {}
