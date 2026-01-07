package daw.dwes.agenda_contactes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import daw.dwes.agenda_contactes.model.Contacte;

public interface AgendaRepository extends JpaRepository<Contacte, Long>{
    
}
