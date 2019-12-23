package com.fitnesstracker.backend.app.web.dto;

import com.fitnesstracker.backend.app.domain.PastExercise;
import com.fitnesstracker.backend.app.domain.State;
import java.time.LocalDateTime;
import org.modelmapper.AbstractConverter;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.config.Configuration.AccessLevel;

public class PastExerciseMapper {

  private final ModelMapper mapper = new ModelMapper();

  public PastExerciseMapper() {
    mapper.addConverter(convertToState());
    mapper.addConverter(convertToLocalDateTime());
    mapper.getConfiguration()
      .setFieldMatchingEnabled(true)
      .setFieldAccessLevel(AccessLevel.PRIVATE);

    mapper.addMappings(new PropertyMap<PastExerciseDto, PastExercise>() {
      @Override
      protected void configure() {
        skip(destination.getId());
      }
    });
  }

  public PastExercise toEntity(PastExerciseDto dto) {
    return mapper.map(dto, PastExercise.class);
  }

  public PastExerciseDto toDto(PastExercise pastExercise) {
    return mapper.map(pastExercise, PastExerciseDto.class);
  }

  private AbstractConverter<String, State> convertToState() {
    return new AbstractConverter<String, State>() {
      @Override
      protected State convert(String stringState) {
        return State.valueOf(stringState);
      }
    };
  }

  private AbstractConverter<String, LocalDateTime> convertToLocalDateTime() {
    return new AbstractConverter<String, LocalDateTime>() {
      @Override
      protected LocalDateTime convert(String stringUUID) {
        stringUUID = stringUUID.replace("Z", "");
        return LocalDateTime.parse(stringUUID);
      }
    };
  }
}
